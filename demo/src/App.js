import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FileOperationsDemo from './components/FileOperationsDemo';
import GitHubOperationsDemo from './components/GitHubOperationsDemo';
import DataAnalysisDemo from './components/DataAnalysisDemo';

const App = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">MCP Interactive Demo</h1>
      
      <Tabs defaultValue="files" className="w-full">
        <TabsList>
          <TabsTrigger value="files">File Operations</TabsTrigger>
          <TabsTrigger value="github">GitHub Operations</TabsTrigger>
          <TabsTrigger value="analysis">Data Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="files">
          <FileOperationsDemo />
        </TabsContent>

        <TabsContent value="github">
          <GitHubOperationsDemo />
        </TabsContent>

        <TabsContent value="analysis">
          <DataAnalysisDemo />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default App;