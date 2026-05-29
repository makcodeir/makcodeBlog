import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// Function to automatically read markdown files from the 'posts' directory
function getPostsSidebar() {
  // Get the absolute path to the 'posts' directory
  const postsPath = path.join(process.cwd(), 'posts');
  
  // Return empty array if directory doesn't exist
  if (!fs.existsSync(postsPath)) return [];

  // Read all files in the directory
  const files = fs.readdirSync(postsPath);
  
  return files
    // Keep only .md files and exclude index.md if you have one
    .filter(file => file.endsWith('.md') && file !== 'index.md')
    // Sort files alphabetically (you can change this logic to sort by date, etc.)
    .sort() 
    .map(file => {
      // Remove the .md extension for the link and text
      const name = file.replace('.md', '');
      
      return {
        text: name, 
        link: `/posts/${name}`
      };
    });
}

export default defineConfig({
  // Your other configs...
  title: "MakcodeIR",
  themeConfig: {
    sidebar: [
      {
        text: 'Posts',
        // Call the function to dynamically generate the items
        items: getPostsSidebar()
      }
    ]
  }
})
