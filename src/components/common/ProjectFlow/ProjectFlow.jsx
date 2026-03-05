import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, { Background, ControlButton, Controls, MarkerType, ReactFlowProvider, useEdgesState, useNodesState, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';
import * as S from './style';
import { flowData } from '../../../utils/flowData';
import { FiMinimize, FiRotateCcw, FiSearch } from 'react-icons/fi';

/* 렌더링 시마다 객체가 새로 생성되는 것을 방지하기 위해 상수로 추출 */
const NODE_TYPES = {};
const EDGE_TYPES = {};
const FIT_VIEW_OPTIONS = { padding: 0.2 };
const DEFAULT_EDGE_OPTIONS = {
    type: 'smoothstep',
    animated: true,
    markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 12,
        height: 12,
        color: '#007bff'
    },
    style: { stroke: '#636e7b', strokeWidth: 2.5 },
};

/* ProjectFlow 컴포넌트: projectId를 받아 해당 프로젝트의 로직 시각화 다이어그램을 렌더링 */
function ProjectFlow({ projectId }) {

    const { fitView } = useReactFlow();
    const [isExpanded, setIsExpanded] = useState(false);

    /* projectId가 바뀔 때만 데이터를 가져오도록 메모이제이션 */
    const currentFlow = useMemo(() => flowData?.[projectId], [projectId]);

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);


    const handleFitView = useCallback(() => {
        requestAnimationFrame(() => {
            fitView({
                duration: 600,
                padding: 0.3,
                includeHiddenNodes: true
            });
        });
    }, [fitView]);

    useEffect(() => {
        if (currentFlow) {
            setNodes(currentFlow.nodes || []);
            setEdges(currentFlow.edges || []);

            handleFitView();
        }
    }, [currentFlow, setNodes, setEdges, fitView]);

    /* 위치 원상복귀 함수 */
    const handleResetButton = useCallback(() => {
        if (!currentFlow) return;

        setNodes(currentFlow.nodes.map(node => ({ ...node })));
        handleFitView();

    }, [currentFlow, setNodes, fitView]);

    /* 차트를 전체화면으로 확대 */
    const handleExpandButton = useCallback(() => {
        setIsExpanded(prev => !prev);
        setTimeout(() => {
            handleFitView();
        }, 300);
    }, [fitView]);

    return (
        <S.FlowContainer>

            <h3>{currentFlow?.title}</h3>

            <S.FlexContainer>

                <S.FlowCanvas $isExpanded={isExpanded}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        fitView
                        fitViewOptions={FIT_VIEW_OPTIONS}
                        defaultEdgeOptions={DEFAULT_EDGE_OPTIONS}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        nodeTypes={NODE_TYPES}
                        edgeTypes={EDGE_TYPES}
                        minZoom={0.1}
                        nodesConnectable={false}
                        panOnScroll={false}
                    >
                        {/* 배경의 점 패턴 설정 */}
                        <Background color="#2d3139" gap={20} />

                        {/* 왼쪽 컨트롤바 */}
                        <Controls position="top-left">
                            <ControlButton onClick={handleResetButton} title="reset view">
                                <FiRotateCcw />
                            </ControlButton>
                            <ControlButton onClick={handleExpandButton} title={isExpanded ? "collapse" : "expand"}>
                                {isExpanded ? <FiMinimize /> : <FiSearch />}
                            </ControlButton>
                        </Controls>

                    </ReactFlow>
                </S.FlowCanvas>

                {currentFlow?.description && (
                    <S.DescriptionBox>
                        {currentFlow?.description.map((desc, i) => (
                            <p key={i}>{desc}</p>
                        ))}
                    </S.DescriptionBox>
                )}

            </S.FlexContainer>

            {isExpanded && <S.Overlay onClick={handleExpandButton} />}
        </S.FlowContainer>
    );
}

export default function ProjectFlowWithProvider(props) {
    return (
        <ReactFlowProvider>
            <ProjectFlow {...props} />
        </ReactFlowProvider>
    );
}