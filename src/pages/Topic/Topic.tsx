import { LearningPathLearningElementNode, IFrameModal, nodeTypes } from '@components'
import { LearningElement, LearningPathElement, LearningPathLearningElement, LearningPathElementReturn } from '@core'
import { Box, Button, Paper, Theme, Typography, useTheme } from '@mui/material'
import log from 'loglevel'
import { useEffect, useState, useContext, useCallback, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactFlow, { Node, Edge, MiniMap, Controls, Background, Handle, NodeProps, Position } from 'reactflow'
import useBoundStore from '@store'
import { AuthContext } from '@services'
import StudentLearningElement from 'src/common/core/StudentLearningElement/StudentLearningElement'
import { useTranslation } from 'react-i18next'
import 'reactflow/dist/style.css'
import { DefaultSkeleton as Skeleton } from '@common/components'

const _useTopic = () => {
  console.log('useTopic')
}

type TopicProps = {
  useTopic?: typeof _useTopic
}

// TODO URL Stuktur übelrgeen. bzswp. localhost:3000/topic?topic=1
// Topic Page - TODO Component extract
export const Topic = ({ useTopic = _useTopic }: TopicProps): JSX.Element => {
  const [initialNodes, setInitialNodes] = useState<Node[]>()
  const [initialEdges, setInitialEdges] = useState<Edge[]>()
  const navigate = useNavigate()
  const authcontext = useContext(AuthContext)
  const { courseId, topicId } = useParams()
  const { t } = useTranslation()
  const theme = useTheme()
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const fetchUser = useBoundStore((state) => state.fetchUser)
  const fetchLearningPath = useBoundStore((state) => state.fetchLearningPathElement)

  const handleOpen = useMemo(() => {
    return () => {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSetUrl = useCallback((url: string) => {
    setUrl(url)
  }, [])

  const handleSetTitle = useCallback((title: string) => {
    setTitle(title)
  }, [])

  const mapNodes = useCallback(
    (learning_path_data: LearningPathElement) => {
      const nodes = mapLearningPathToNodes(
        learning_path_data,
        theme,
        handleSetUrl,
        handleSetTitle,
        handleOpen,
        handleClose
      )

      // Id array of all nodes which types are not 'ÜB
      const nodesWithEdges = nodes.filter((node) => node.type !== 'ÜB').map((node) => node.id)

      const edges: Edge[] = nodesWithEdges.map((item, index) => ({
        id: 'Edge' + item.toString(),
        source: item,
        target: nodesWithEdges[index + 1]
      }))
      return { nodes, edges }
    },
    [theme]
  )

  // useEffect(() => {
  //   const { nodes, edges } = mapNodes(LearningPathElement)
  //   console.log('rendering nodes')
  //   setInitialNodes(nodes)
  //   //setInitialEdges(edges)
  //   setInitialEdges(edges)
  // }, [mapNodes, LearningPathElement])

  useEffect(() => {
    // request to backend to get learning path for topic
    // alert('Topic: ' + topic)
    log.log('Topic page')
    const preventEndlessLoading = setTimeout(() => {
      log.log('Topic page timeout')
      navigate('/login')
    }, 5000)
    if (authcontext.isAuth) {
      clearTimeout(preventEndlessLoading)
      fetchUser().then((user) => {
        fetchLearningPath(user.settings.user_id, user.lms_user_id, user.id, Number(courseId), Number(topicId)).then(
          (learning_path_data) => {
            const { nodes, edges } = mapNodes(learning_path_data)
            setInitialNodes(nodes)
            //setInitialEdges(edges)
            setInitialEdges(edges)
          }
        )
      })
    }
    return () => {
      clearTimeout(preventEndlessLoading)
    }
  }, [authcontext.isAuth, courseId, fetchLearningPath, fetchUser, theme, topicId])

  log.setLevel('error')

  // TODO: HIer edges rendern
  return initialNodes && initialEdges ? (
    <Box height={'100%'}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} nodeTypes={nodeTypes} fitView>
        <Background gap={16} />
        <MiniMap nodeBorderRadius={2} />
        <Controls />
      </ReactFlow>
      <IFrameModal url={url} title={title} isOpen={isOpen} onClose={handleClose} key={url} />
    </Box>
  ) : (
    <Skeleton variant="rectangular" width={'80%'} height={'80%'} />
  )
}

export default Topic

const mapLearningPathToNodes = (
  learningPath: LearningPathElement,
  theme: Theme,
  handleSetUrl: (url: string) => void,
  handleSetTitle: (title: string) => void,
  handleOpen: () => void,
  handleClose: () => void
): Node[] => {
  // Sort learning path
  const sortedLearningPath = learningPath.path.sort((a, b) => a.position - b.position)

  // Every exercise learning element
  const learningPathExercises = sortedLearningPath.filter((item) => item.learning_element.classification === 'ÜB')

  // Every learning element except exercises
  const learningPathExcludingExercises = sortedLearningPath.filter(
    (item) => item.learning_element.classification !== 'ÜB'
  )

  const groupHeight = 175
  const nodeOffsetX = 50

  const learningElementStyle = {
    background: theme.palette.primary.main,
    padding: 10,
    border: '1px solid ' + theme.palette.grey[500],
    borderRadius: 8,
    cursor: 'pointer'
  }

  // Exercise nodes
  const exerciseLearningElementChildNodes = learningPathExercises.map((node, index) => {
    const node_data: LearningPathLearningElementNode = {
      lms_id: node.learning_element.lms_id,
      name: node.learning_element.name,
      activity_type: node.learning_element.activity_type,
      classification: node.learning_element.classification,
      is_recommended: node.recommended,
      handleSetUrl: handleSetUrl,
      handleSetTitle: handleSetTitle,
      handleOpen: handleOpen,
      handleClose: handleClose
    }
    return {
      id: node.position.toString() + '-' + node.learning_element.lms_id,
      type: node.learning_element.classification,
      data: node_data,
      position: {
        x: nodeOffsetX + 300 * index,
        y: 250 * (learningPathExercises[0].position - 1) + 50
      },
      style: learningElementStyle
    }
  })

  // Parent node for exercise learning elements
  const exerciseLearningElementParentNode =
    learningPathExercises.length > 0
      ? {
        id: learningPathExercises[0].position.toString(),
        data: { label: 'Übungen' },
        type: 'GROUP',
        position: {
          x: 0,
          y: 250 * (learningPathExercises[0].position - 1)
        },
        style: {
          border: '1px solid ' + theme.palette.grey[500],
          borderRadius: 8,
          width: 300 * learningPathExercises.length + nodeOffsetX,
          height: groupHeight
        }
      }
      : null

  // Rest of learning elements
  const learningElementNodesExcludingExercises = learningPathExcludingExercises.map((item, index) => {
    const node_data: LearningPathLearningElementNode = {
      lms_id: item.learning_element.lms_id,
      name: item.learning_element.name,
      activity_type: item.learning_element.activity_type,
      classification: item.learning_element.classification,
      is_recommended: item.recommended,
      handleSetUrl: handleSetUrl,
      handleSetTitle: handleSetTitle,
      handleOpen: handleOpen,
      handleClose: handleClose
    }

    return {
      id: item.position.toString(),
      type: item.learning_element.classification,
      data: node_data,
      position: {
        x: nodeOffsetX + (300 * (learningPathExercises.length - 1)) / 2,
        y:
          exerciseLearningElementParentNode && item.position < parseInt(exerciseLearningElementParentNode.id)
            ? 250 * (item.position - 1)
            : exerciseLearningElementParentNode
              ? 250 * (item.position - exerciseLearningElementChildNodes.length) + groupHeight - 70
              : 250 * (item.position - 1)
      },
      style: learningElementStyle
    }
  })

  // Insert exercise nodes into learning elements
  const learningElementNodesBeforeExercises = learningElementNodesExcludingExercises.filter(
    (item) => exerciseLearningElementParentNode && parseInt(item.id) < parseInt(exerciseLearningElementParentNode.id)
  )

  const learningElementNodesAfterExercises = learningElementNodesExcludingExercises.filter(
    (item) => exerciseLearningElementParentNode && parseInt(item.id) > parseInt(exerciseLearningElementParentNode.id)
  )

  // Add 1 to the id of all elements (including exercises) after the exercise parent node
  const learningElementNodesAfterExercisesElementParentNode = learningElementNodesAfterExercises.map((item) => {
    return {
      ...item,
      id: (parseInt(item.id) + 1).toString()
    }
  })

  // const exerciseLearningElementChildNodesWithIncreasedId = exerciseLearningElementChildNodes.map((item) => {
  //   return {
  //     ...item,
  //     id: (parseInt(item.id) + 1).toString()
  //   }
  // })

  const learningElementNodes = [
    ...(learningElementNodesBeforeExercises.length > 0
      ? learningElementNodesBeforeExercises
      : learningElementNodesExcludingExercises),
    ...(exerciseLearningElementParentNode
      ? [exerciseLearningElementParentNode, ...exerciseLearningElementChildNodes]
      : []),
    ...learningElementNodesAfterExercisesElementParentNode
  ]

  return learningElementNodes
}
