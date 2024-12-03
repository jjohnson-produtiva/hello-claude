# Example of data analysis with Claude MCP

import pandas as pd
import matplotlib.pyplot as plt

def analyze_repository_data(data_file):
    """Analyzes repository data and generates insights"""
    try:
        # Read data
        df = pd.read_csv(data_file)
        
        # Generate basic statistics
        stats = {
            'total_commits': len(df),
            'unique_contributors': df['author'].nunique(),
            'avg_commits_per_day': df.groupby('date')['commit_id'].count().mean()
        }
        
        # Generate visualizations
        plt.figure(figsize=(10, 6))
        df['date'].value_counts().sort_index().plot(kind='line')
        plt.title('Commit Activity Over Time')
        plt.savefig('commit_activity.png')
        
        return stats
        
    except Exception as e:
        print(f'Error analyzing data: {e}')
        return None
