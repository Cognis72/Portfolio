# Troubleshooting Guide: HTML Form to Google Sheets

This guide covers common issues and their solutions when setting up a form that submits to Google Sheets via Google Apps Script.

## 🔍 Common Issues and Solutions

### 1. Form Shows "Configuration needed" Message

**Problem**: The form displays a warning about updating the GOOGLE_SCRIPT_URL.

**Solution**:
- Make sure you've deployed your Google Apps Script as a Web App
- Copy the Web App URL from the deployment
- Replace `YOUR_SCRIPT_ID` in the HTML file with your actual Web App URL
- The URL should look like: `https://script.google.com/macros/s/AKfycbx.../exec`

### 2. "Cannot access Google Sheet" Error

**Problem**: Google Apps Script can't open your Google Sheet.

**Possible Causes & Solutions**:

**Cause A: Wrong Sheet ID**
- Double-check your Sheet ID from the Google Sheets URL
- Make sure you copied the entire ID (it's usually 44 characters long)
- Verify there are no extra spaces or characters

**Cause B: Sheet doesn't exist or was deleted**
- Make sure the Google Sheet still exists
- Check that you're using the same Google account for both the sheet and the script

**Cause C: Permission issues**
- Make sure the Google Apps Script has permission to access Google Sheets
- Try running the `testSetup` function manually and grant permissions

### 3. Form Submits but No Data Appears in Sheet

**Problem**: Form submission appears successful but data doesn't show up in Google Sheets.

**Debugging Steps**:

1. **Check Google Apps Script Logs**:
   - Go to [script.google.com](https://script.google.com)
   - Open your project
   - Click "Executions" in the left sidebar
   - Look for recent executions and any error messages

2. **Verify Sheet Name**:
   - Check if your sheet tab is named "Sheet1"
   - If not, update the `SHEET_NAME` variable in your script
   - Or rename your sheet tab to "Sheet1"

3. **Test the Script Directly**:
   - Run the `testDoPost` function in Google Apps Script
   - Check if test data appears in your sheet

### 4. CORS (Cross-Origin) Errors

**Problem**: Browser console shows CORS-related errors.

**Solution**:
- This usually happens when not using FormData correctly
- Make sure you're using `new FormData(form)` in your JavaScript
- Avoid sending JSON data - stick with FormData
- Ensure your Google Apps Script is deployed with "Anyone" access

### 5. "The script completed but did not return anything" Error

**Problem**: Google Apps Script executes but doesn't return a response.

**Solutions**:
- Make sure your `doPost` function has a `return` statement
- Verify that you're returning a `ContentService.createTextOutput()`
- Check that there are no syntax errors in your Google Apps Script

### 6. Permission Denied Errors

**Problem**: Google Apps Script shows permission errors.

**Solutions**:
1. **Re-authorize the script**:
   - Go to your Google Apps Script project
   - Run any function manually
   - Grant all requested permissions

2. **Check deployment settings**:
   - Make sure "Execute as" is set to "Me"
   - Make sure "Who has access" is set to "Anyone"

3. **Update deployment**:
   - Create a new deployment if permission issues persist
   - Use the new Web App URL in your HTML form

### 7. Form Fields Not Saving Correctly

**Problem**: Some form fields are empty in the Google Sheet even though they were filled out.

**Solutions**:
- Check that your form field `name` attributes match the script expectations
- Verify the field processing in the `processFormData` function
- Make sure required fields are properly validated

### 8. Mobile/Responsive Issues

**Problem**: Form doesn't display or work correctly on mobile devices.

**Solutions**:
- Make sure you have the viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Test the form on actual mobile devices, not just browser dev tools
- Check that font sizes are at least 16px to prevent zoom on iOS

### 9. Slow Form Submission

**Problem**: Form takes a long time to submit or times out.

**Solutions**:
- This is usually due to Google Apps Script cold starts
- Consider adding a loading spinner (already included in the provided code)
- The first submission after a period of inactivity may be slower

### 10. Duplicate Submissions

**Problem**: Multiple rows appear for a single form submission.

**Solutions**:
- Disable the submit button during submission (already implemented)
- Check that users aren't double-clicking the submit button
- Verify that your JavaScript isn't binding multiple event listeners

## 🛠️ Debugging Tools and Techniques

### 1. Browser Developer Tools

**Open Developer Tools**: Press F12 or right-click → "Inspect"

**Check Console Tab**:
- Look for JavaScript errors (red text)
- Use `console.log()` statements to debug your code
- Check network requests to see if the form submission is reaching Google Apps Script

**Check Network Tab**:
- See if the POST request to Google Apps Script is successful
- Check the response from the server
- Look for any 4xx or 5xx HTTP error codes

### 2. Google Apps Script Debugging

**View Execution Logs**:
1. Go to [script.google.com](https://script.google.com)
2. Open your project
3. Click "Executions" in the left sidebar
4. Click on any execution to see detailed logs

**Add Debug Logging**:
```javascript
console.log('Debug info:', variable);
