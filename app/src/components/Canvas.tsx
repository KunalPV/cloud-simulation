"use client";

import { ServiceData, ServiceNodeData, ServiceType } from "@/types/Service";
import {
  Node as ReactFlowNode,
  ReactFlow,
  useEdgesState,
  useNodesState,
  addEdge,
  Background,
  Controls,
} from "@xyflow/react";
import { Button } from "./ui/button";

import "@xyflow/react/dist/style.css";
import ServiceNode from "./ServiceNode";
import { useCallback, useMemo } from "react";

const Canvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<
    ReactFlowNode<ServiceNodeData>
  >([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const nodeTypes = useMemo(() => ({ "service-node": ServiceNode }), []);

  const addNode = useCallback(
    async (endpoint: ServiceType) => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/service/${endpoint}`
        );
        if (!res.ok)
          throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);

        const data: ServiceData = await res.json();
        const newNode: ReactFlowNode<ServiceNodeData> = {
          id: data.id,
          type: "service-node",
          position: {
            x: data.position.x,
            y: data.position.y,
          },
          data: {
            name: data.name,
            type: data.type,
            options: data.options,
            region: data.region,
            vpc: data.vpc,
          },
        };

        setNodes((nds) => [...nds, newNode]);
      } catch (error) {
        console.log("Error loading node: ", error);
      }
    },
    [setNodes]
  );

  console.log("Node: ", nodes);
  console.log("Edge: ", edges);

  return (
    <div className='h-screen w-screen'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <div className='fixed bottom-4 left-1/2 -translate-x-1/2 z-50 space-x-2'>
          <Button onClick={() => addNode(ServiceType.Server)}>
            Add Server
          </Button>
          <Button onClick={() => addNode(ServiceType.Database)}>
            Add Database
          </Button>
        </div>

        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
