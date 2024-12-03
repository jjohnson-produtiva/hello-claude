# Example of file operations using Claude MCP

def create_file(filename, content):
    """Creates a new file with the given content"""
    try:
        with open(filename, 'w') as f:
            f.write(content)
        print(f'Successfully created {filename}')
    except Exception as e:
        print(f'Error creating file: {e}')

def read_file(filename):
    """Reads and returns the content of a file"""
    try:
        with open(filename, 'r') as f:
            return f.read()
    except Exception as e:
        print(f'Error reading file: {e}')
        return None

def update_file(filename, new_content):
    """Updates an existing file with new content"""
    try:
        with open(filename, 'w') as f:
            f.write(new_content)
        print(f'Successfully updated {filename}')
    except Exception as e:
        print(f'Error updating file: {e}')
