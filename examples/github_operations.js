// Example of GitHub operations using Claude MCP

const createIssue = async (title, body) => {
    try {
        const response = await fetch('/api/issues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, body })
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating issue:', error);
    }
};

const createPullRequest = async (title, branch, description) => {
    try {
        const response = await fetch('/api/pulls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                head: branch,
                base: 'main',
                body: description
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating pull request:', error);
    }
};
