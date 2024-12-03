import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';

const GitHubOperationsDemo = () => {
  const [issueTitle, setIssueTitle] = useState('');
  const [issueBody, setIssueBody] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCreateIssue = async () => {
    try {
      const response = await fetch('/api/issues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: issueTitle,
          body: issueBody
        })
      });
      
      const data = await response.json();
      setResult(`Issue created successfully: #${data.number}`);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>GitHub Operations Demo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-4">
            <Input
              placeholder="Issue title"
              value={issueTitle}
              onChange={(e) => setIssueTitle(e.target.value)}
            />
            <Textarea
              placeholder="Issue description"
              value={issueBody}
              onChange={(e) => setIssueBody(e.target.value)}
            />
          </div>

          <Button onClick={handleCreateIssue}>Create Issue</Button>

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

export default GitHubOperationsDemo;