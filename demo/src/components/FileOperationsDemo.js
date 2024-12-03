import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';

const FileOperationsDemo = () => {
  const [filename, setFilename] = useState('');
  const [content, setContent] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCreateFile = async () => {
    try {
      await window.fs.writeFile(filename, content);
      setResult(`File ${filename} created successfully`);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  const handleReadFile = async () => {
    try {
      const data = await window.fs.readFile(filename, { encoding: 'utf8' });
      setResult(`File contents: ${data}`);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>File Operations Demo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-4">
            <Input
              placeholder="Enter filename"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
            />
            <Input
              placeholder="Enter file content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="flex space-x-4">
            <Button onClick={handleCreateFile}>Create File</Button>
            <Button onClick={handleReadFile}>Read File</Button>
          </div>

          {result && (
            <Alert>
              <AlertDescription>{result}</AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FileOperationsDemo;