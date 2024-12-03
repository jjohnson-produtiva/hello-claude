# Example of file operations using Claude MCP
import os
import shutil
from typing import Optional

class FileOperationError(Exception):
    """Base exception for file operations"""
    pass

class FilePermissionError(FileOperationError):
    """Raised when permission issues occur"""
    pass

class FileStorageError(FileOperationError):
    """Raised when storage-related issues occur"""
    pass

def check_permissions(path: str) -> None:
    """Check if we have necessary permissions for file operations"""
    directory = os.path.dirname(path) or '.'
    if not os.access(directory, os.W_OK):
        raise FilePermissionError(f'No write permission for directory: {directory}')

def check_storage_space(path: str, content_size: int) -> None:
    """Check if there's enough storage space"""
    directory = os.path.dirname(path) or '.'
    stats = shutil.disk_usage(directory)
    if stats.free < content_size:
        raise FileStorageError(f'Not enough space. Required: {content_size}, Available: {stats.free}')

def create_file(filename: str, content: str) -> None:
    """Creates a new file with the given content"""
    try:
        # Check if file already exists
        if os.path.exists(filename):
            raise FileExistsError(f'File already exists: {filename}')
            
        # Check permissions
        check_permissions(filename)
        
        # Check storage space
        check_storage_space(filename, len(content.encode('utf-8')))
        
        # Create file
        with open(filename, 'w') as f:
            f.write(content)
            
        print(f'Successfully created {filename}')
        
    except FileOperationError as e:
        print(f'Operation failed: {str(e)}')
        raise
    except Exception as e:
        print(f'Unexpected error: {str(e)}')
        raise FileOperationError(f'Failed to create file: {str(e)}')

def read_file(filename: str) -> Optional[str]:
    """Reads and returns the content of a file"""
    try:
        # Check if file exists
        if not os.path.exists(filename):
            raise FileNotFoundError(f'File not found: {filename}')
            
        # Check read permissions
        if not os.access(filename, os.R_OK):
            raise FilePermissionError(f'No read permission for file: {filename}')
            
        # Read file
        with open(filename, 'r') as f:
            return f.read()
            
    except FileOperationError as e:
        print(f'Operation failed: {str(e)}')
        raise
    except Exception as e:
        print(f'Unexpected error: {str(e)}')
        raise FileOperationError(f'Failed to read file: {str(e)}')

def update_file(filename: str, new_content: str) -> None:
    """Updates an existing file with new content"""
    try:
        # Check if file exists
        if not os.path.exists(filename):
            raise FileNotFoundError(f'File not found: {filename}')
            
        # Check permissions
        check_permissions(filename)
        
        # Check storage space
        check_storage_space(filename, len(new_content.encode('utf-8')))
        
        # Update file
        with open(filename, 'w') as f:
            f.write(new_content)
            
        print(f'Successfully updated {filename}')
        
    except FileOperationError as e:
        print(f'Operation failed: {str(e)}')
        raise
    except Exception as e:
        print(f'Unexpected error: {str(e)}')
        raise FileOperationError(f'Failed to update file: {str(e)}')