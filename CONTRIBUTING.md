# Contributing to Learn-git-with-me

Thank you for your interest in contributing to GitME! Your support is greatly appreciated, and we look forward to your valuable contributions.

## Getting Started

### Fork and Clone the Repository

1. **Fork this repository**  
   Click [here](https://github.com/spaciousejar/learn-git-with-me/fork) to create a fork of the repository.

2. **Clone your forked repository to your local machine**  
   Use the following command to clone your forked repository:

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/Learn-git-with-me.git
   ```

3. **Navigate to the project directory**  
   Change into the project directory with:

   ```bash
   cd Learn-git-with-me
   ```

4. **Create a new branch**  
   Create a new branch for your changes:

   ```bash
   git checkout -b my-new-branch
   ```

5. **Install dependencies**  
   Install the necessary dependencies by running:

   ```bash
   npm install
   ```

6. **Create a `.env.local` file**  
   Set up your environment variables by creating a `.env.local` file:

   ```bash
   touch .env.local && echo "NEXT_PUBLIC_APP_URL=http://localhost:3000" > .env.local
   ```

7. **Run the project**  
   Start the development server with:

   ```bash
   npm run dev
   ```

## Editing Documentation and Commands

To edit documentation or commands, please follow these steps:

1. **Locate the Documentation or Command**  
   Navigate to `contents/docs/essential-commands` and open the `index.mdx` file.  
   For instance, you may need to edit "contents/docs/essential-commands/branching/git-checkout/index.mdx".  
   Review the documentation to identify what needs updating.

2. **Make Your Changes**  
   Open the relevant Markdown file or command script and implement your edits.

3. **Utilize Markdown Syntax**  
   Ensure that you apply the correct Markdown syntax for headings, lists, and code blocks.

4. **Test Your Changes**  
   If you modify any commands, test them locally to confirm they function as expected.

5. **Commit Your Changes**  
   Use a clear and descriptive message for your commit.

6. **Push Your Changes**  
   Push your changes to your branch on GitHub.

7. **Create a Pull Request**  
   After pushing, create a pull request for review and provide an explanation of your changes.

By adhering to these steps, you can make significant contributions to enhancing the documentation and command structure of the project.

## Adding New Documentation or Commands

To contribute new documentation or commands, please follow these steps:

1. **Navigate to the `content/docs` directory**  
   Create a new folder named after the documentation or command you wish to add.

2. **Create an `index.mdx` file in that folder**  
   Write the relevant documentation in this file, ensuring it is clear and comprehensive.

3. **Update the left sidebar navigation**  
   To display your new documentation in the left sidebar, open the `lib/routes-config.ts` file, which manages page navigation and sorting in the sidebar.

   Add an entry similar to the following structure:

   ```javascript
   {
     title: "Basic Concepts",
     href: "/basic-concepts",
     noLink: true,
     items: [
       { title: "Why Use Git", href: "/why-use-git" },
       {
         title: "Tips to Master Git",
         href: "/tips",
       },
     ],
   },
   ```

   Ensure that your new entry is placed appropriately within the existing structure to maintain organization and accessibility.

4. **Test Your Changes**  
   If you modify any commands, test them locally to confirm they function as expected.

5. **Commit Your Changes**  
   Use a clear and descriptive message for your commit.

6. **Push Your Changes**  
   Push your changes to your branch on GitHub.

7. **Create a Pull Request**  
   After pushing, create a pull request for review and provide an explanation of your changes.

## Ask for Help

If you have any questions or need assistance, please open a new GitHub issue. We are here to help you!

