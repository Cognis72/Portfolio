# Complete Setup Instructions: HTML Form to Google Sheets

This guide will walk you through setting up a web form that submits data directly to Google Sheets using Google Apps Script.

## 📋 Prerequisites

- A Google account
- Basic understanding of HTML/JavaScript
- A text editor (VS Code, Notepad++, etc.)
- A hosting platform account (GitHub, Replit, etc.)

## 🚀 Step-by-Step Setup

### Step 1: Create a Google Sheet

1. **Open Google Sheets**: Go to [sheets.google.com](https://sheets.google.com)
2. **Create a new spreadsheet**: Click "Blank" to create a new sheet
3. **Name your sheet**: Click "Untitled spreadsheet" and give it a meaningful name like "Contact Form Submissions"
4. **Get the Sheet ID**: 
   - Look at the URL: `https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit`
   - Copy the long string between `/d/` and `/edit` - this is your Sheet ID
   - Example: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### Step 2: Set Up Google Apps Script

1. **Open Google Apps Script**: Go to [script.google.com](https://script.google.com)
2. **Create a new project**: Click "New project"
3. **Name your project**: Click "Untitled project" and rename it to "Form Handler"
4. **Replace the default code**: 
   - Delete all existing code in the editor
   - Copy and paste the entire contents of `google-apps-script.js`
5. **Configure the Sheet ID**:
   - Find the line: `const SHEET_ID = 'YOUR_SHEET_ID';`
   - Replace `'YOUR_SHEET_ID'` with your actual Sheet ID from Step 1
   - Example: `const SHEET_ID = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';`

### Step 3: Test Your Google Apps Script

1. **Save the script**: Press `Ctrl+S` (or `Cmd+S` on Mac)
2. **Run the test function**:
   - In the function dropdown, select `testSetup`
   - Click the "Run" button (▶️)
   - **Grant permissions** when prompted:
     - Click "Review permissions"
     - Choose your Google account
     - Click "Advanced" → "Go to [Project Name] (unsafe)"
     - Click "Allow"
3. **Check the execution**:
   - Look at the "Execution transcript" at the bottom
   - You should see "Setup test passed!" message
   - Check your Google Sheet - it should now have headers and a test row

### Step 4: Deploy as Web App

1. **Deploy the script**:
   - Click "Deploy" → "New deployment"
   - Click the gear icon ⚙️ next to "Type"
   - Select "Web app"
2. **Configure deployment settings**:
   - **Description**: "Form submission handler"
   - **Execute as**: "Me (your-email@gmail.com)"
   - **Who has access**: "Anyone"
   - Click "Deploy"
3. **Authorize the deployment**: Click "Authorize access" and go through the permission flow again
4. **Copy the Web App URL**: 
   - Copy the URL that appears (it looks like: `https://script.google.com/macros/s/[SCRIPT_ID]/exec`)
   - **Save this URL** - you'll need it for the HTML form

### Step 5: Configure the HTML Form

1. **Open the HTML file**: Open `index.html` in your text editor
2. **Update the Google Script URL**:
   - Find the line: `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';`
   - Replace the entire URL with your Web App URL from Step 4
   - Example: `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx1234567890abcdef/exec';`
3. **Save the file**

### Step 6: Test Locally

1. **Open the HTML file**: Double-click `index.html` to open it in your browser
2. **Check for configuration errors**: Look for any error messages on the page
3. **Fill out the form**: Enter test data in all required fields
4. **Submit the form**: Click "Submit Form"
5. **Verify success**: 
   - You should see a green success message
   - Check your Google Sheet - the new data should appear as a new row

### Step 7: Deploy to Web Hosting

#### Option A: GitHub Pages

1. **Create a GitHub repository**:
   - Go to [github.com](https://github.com) and create a new repository
   - Name it something like `contact-form`
   - Make it public
2. **Upload your file**:
   - Upload `index.html` to the repository
   - Commit the changes
3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "main" or "master"
   - Click "Save"
4. **Access your site**: Your form will be available at `https://[username].github.io/[repository-name]`

#### Option B: Replit

1. **Create a new Repl**:
   - Go to [replit.com](https://replit.com)
   - Click "Create Repl"
   - Choose "HTML, CSS, JS"
2. **Replace the HTML**:
   - Replace the contents of `index.html` with your form code
   - Delete any other files (CSS, JS) since everything is in the HTML file
3. **Run your project**: Click the "Run" button
4. **Get the URL**: Your form will be available at the URL shown in the preview

### Step 8: Final Testing

1. **Test from the hosted site**: Fill out and submit the form from your hosted URL
2. **Verify data submission**: Check that new submissions appear in your Google Sheet
3. **Test on mobile**: Open the form on a mobile device to ensure it's responsive
4. **Test error handling**: Try submitting with missing required fields

## ✅ Verification Checklist

- [ ] Google Sheet created and Sheet ID copied
- [ ] Google Apps Script created and configured with correct Sheet ID
- [ ] `testSetup` function runs successfully
- [ ] Web App deployed with correct permissions ("Me" and "Anyone")
- [ ] HTML form updated with correct Web App URL
- [ ] Form works when tested locally
- [ ] Form deployed to hosting platform
- [ ] Form works when tested from hosted URL
- [ ] Data appears correctly in Google Sheet
- [ ] Form is mobile-responsive

## 🎯 Next Steps

Once your form is working:

1. **Customize the styling**: Modify the CSS to match your brand
2. **Add more fields**: Add additional form fields as needed
3. **Set up notifications**: Configure email notifications when forms are submitted
4. **Add analytics**: Track form submissions with Google Analytics
5. **Backup your data**: Regularly export your Google Sheet data

## 🆘 Need Help?

If you encounter issues, check the [troubleshooting guide](troubleshooting-guide.md) or the [deployment guide](deployment-guide.md) for more detailed assistance.
