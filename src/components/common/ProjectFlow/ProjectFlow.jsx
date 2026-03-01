import React, { useCallback, useMemo, useState } from 'react';
import ReactFlow, { Background, ControlButton, Controls, MarkerType, ReactFlowProvider, useEdgesState, useNodesState, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';
import * as S from './style';
import { flowData } from '../../../utils/flowData';
import { FiInfo, FiMinimize, FiRotateCcw, FiSearch } from 'react-icons/fi';

/* ProjectFlow 컴포넌트: projectId를 받아 해당 프로젝트의 로직 시각화 다이어그램을 렌더링 */
function ProjectFlow({ projectId }) {

    const { fitView } = useReactFlow();
    const [isExpanded, setIsExpanded] = useState(false);
    const currentFlow = useMemo(() => flowData?.[projectId], [projectId]);
    const [nodes, setNodes, onNodesChange] = useNodesState(currentFlow?.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(currentFlow?.edges);

    /* 위치 원상복귀 함수 */
    const handleResetButton = useCallback(() => {
        if (!currentFlow) return;

        /* 1. 노드 위치 초기화 (참조 관계를 끊기 위해 새 객체 생성) */
        setNodes(currentFlow.nodes.map(node => ({
            ...node,
            position: { ...node.position }
        })));

        /* 2. 화면 중앙 정렬 및 줌 조절 */
        setTimeout(() => {
            fitView({ duration: 800, padding: 0.2 });
        }, 50);
    }, [currentFlow, setNodes, fitView]);

    /* 차트 초기화 시 fitView 실행 */
    const onInit = useCallback((instance) => {
        setTimeout(() => {
            instance.fitView({ padding: 0.1, duration: 400 });
        }, 100);
    }, []);

    /* 차트를 전체화면으로 확대 */
    const handleExpandButton = () => {
        setIsExpanded(!isExpanded);

        setTimeout(() => {
            fitView({ duration: 400, padding: 0.2 });
        }, 50);
    };

    return (
        <S.FlowContainer>

            <h3>{currentFlow?.title}</h3>

            <S.FlexContainer>

                <S.FlowCanvas $isExpanded={isExpanded}>
                    <ReactFlow
                        key={projectId}
                        nodes={nodes}
                        edges={edges}
                        onInit={onInit}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        fitView
                        minZoom={0.1}
                        fitViewOptions={{ padding: 0.2 }}
                        nodesConnectable={false}
                        defaultEdgeOptions={{
                            type: 'smoothstep',
                            animated: true,
                            markerEnd: { type: MarkerType.ArrowClosed, width: 12, height: 12, color: '#007bff' },
                            style: { stroke: '#636e7b', strokeWidth: 2.5 },
                        }}
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
                            <p key={i}><FiInfo /> {desc}</p>
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