/**
 * Google Apps Script Code for Form Submission Handler
 * 
 * This script receives form data from your HTML form and saves it to Google Sheets.
 * Deploy this as a Web App with the following settings:
 * - Execute as: Me
 * - Who has access: Anyone
 * 
 * IMPORTANT: Make sure to replace "YOUR_SHEET_ID" with your actual Google Sheet ID
 */

// ==========================================
// CONFIGURATION
// ==========================================

// Your actual Google Sheet ID from the spreadsheet URL
const SHEET_ID = '1FQNLxJpIlJoUQ9p4pMzDJnpEsc9NRkzTA5LlvTZc-sM';

// Sheet name where data will be saved (default is "Sheet1")
const SHEET_NAME = 'Sheet1';

// ==========================================
// MAIN FUNCTION - HANDLES POST REQUESTS
// ==========================================

/**
 * Main function that handles POST requests from the web form
 * This is automatically called when someone submits the form
 */
function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request');
    console.log('Parameters:', e.parameter);
    
    // Check if we have form data
    if (!e.parameter) {
      throw new Error('No form data received');
    }
    
    // Get the Google Sheet
    const sheet = getOrCreateSheet();
    
    // Process the form data
    const formData = processFormData(e.parameter);
    
    // Add data to the sheet
    const result = addDataToSheet(sheet, formData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully',
        rowNumber: result.rowNumber,
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    console.error('Error in doPost:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get the Google Sheet or create it if it doesn't exist
 */
function getOrCreateSheet() {
  try {
    // Try to open the existing spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      console.log(`Created new sheet: ${SHEET_NAME}`);
    }
    
    // Check if we need to add headers
    if (sheet.getLastRow() === 0) {
      setupSheetHeaders(sheet);
    }
    
    return sheet;
    
  } catch (error) {
    // If we can't open the sheet, it might be because the ID is wrong
    if (SHEET_ID === 'YOUR_SHEET_ID') {
      throw new Error('Please update SHEET_ID with your actual Google Sheet ID');
    }
    throw new Error(`Cannot access Google Sheet: ${error.message}`);
  }
}

/**
 * Set up column headers in the sheet
 */
function setupSheetHeaders(sheet) {
  const headers = [
    'Timestamp',
    'First Name',
    'Last Name', 
    'Email',
    'Phone',
    'Company',
    'Subject',
    'Message'
  ];
  
  // Add headers to the first row
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  console.log('Sheet headers set up successfully');
}

/**
 * Process and validate the form data
 */
function processFormData(parameter) {
  // Extract form fields
  const formData = {
    timestamp: parameter.timestamp || new Date().toISOString(),
    firstName: parameter.firstName || '',
    lastName: parameter.lastName || '',
    email: parameter.email || '',
    phone: parameter.phone || '',
    company: parameter.company || '',
    subject: parameter.subject || '',
    message: parameter.message || ''
  };
  
  // Validate required fields
  const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message'];
  const missingFields = requiredFields.filter(field => !formData[field].trim());
  
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    throw new Error('Invalid email format');
  }
  
  // Clean and format data
  formData.firstName = cleanText(formData.firstName);
  formData.lastName = cleanText(formData.lastName);
  formData.email = formData.email.toLowerCase().trim();
  formData.message = cleanText(formData.message);
  
  console.log('Form data processed successfully');
  return formData;
}

/**
 * Add the processed data to the Google Sheet
 */
function addDataToSheet(sheet, formData) {
  try {
    // Prepare data array in the same order as headers
    const rowData = [
      new Date(formData.timestamp),
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phone,
      formData.company,
      formData.subject,
      formData.message
    ];
    
    // Get the next empty row
    const nextRow = sheet.getLastRow() + 1;
    
    // Add the data to the sheet
    sheet.getRange(nextRow, 1, 1, rowData.length).setValues([rowData]);
    
    // Auto-resize columns to fit content
    sheet.autoResizeColumns(1, rowData.length);
    
    console.log(`Data added to row ${nextRow}`);
    
    return {
      rowNumber: nextRow,
      dataLength: rowData.length
    };
    
  } catch (error) {
    throw new Error(`Failed to add data to sheet: ${error.message}`);
  }
}

/**
 * Clean and sanitize text input
 */
function cleanText(text) {
  if (!text) return '';
  
  return text
    .toString()
    .trim()
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .substring(0, 1000); // Limit length to prevent extremely long entries
}

// ==========================================
// TESTING AND DEBUGGING FUNCTIONS
// ==========================================

/**
 * Test function to verify the setup
 * Run this function manually to test your configuration
 */
function testSetup() {
  try {
    console.log('Testing Google Apps Script setup...');
    
    // Test sheet access
    const sheet = getOrCreateSheet();
    console.log(`✅ Successfully accessed sheet: ${sheet.getName()}`);
    
    // Test data insertion
    const testData = {
      timestamp: new Date().toISOString(),
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      phone: '123-456-7890',
      company: 'Test Company',
      subject: 'Test Subject',
      message: 'This is a test message'
    };
    
    const result = addDataToSheet(sheet, testData);
    console.log(`✅ Test data added successfully to row ${result.rowNumber}`);
    
    console.log('🎉 Setup test completed successfully!');
    return 'Setup test passed!';
    
  } catch (error) {
    console.error('❌ Setup test failed:', error);
    return `Setup test failed: ${error.message}`;
  }
}

/**
 * Function to manually test doPost with sample data
 */
function testDoPost() {
  const mockEvent = {
    parameter: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '555-0123',
      company: 'Example Corp',
      subject: 'General Inquiry',
      message: 'This is a test message from the manual test function.',
      timestamp: new Date().toISOString()
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test doPost result:', result.getContent());
  return result.getContent();
}

/**
 * Get information about the current setup
 */
function getSetupInfo() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    const info = {
      spreadsheetName: spreadsheet.getName(),
      spreadsheetUrl: spreadsheet.getUrl(),
      sheetName: SHEET_NAME,
      lastRow: sheet ? sheet.getLastRow() : 0,
      timestamp: new Date().toISOString()
    };
    
    console.log('Setup Info:', info);
    return info;
    
  } catch (error) {
    console.error('Error getting setup info:', error);
    return { error: error.message };
  }
}

// ==========================================
// OPTIONAL: GET REQUEST HANDLER
// ==========================================

/**
 * Handle GET requests (optional - for testing the web app URL)
 */
function doGet(e) {
  const html = `
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Google Apps Script Web App is Running!</h2>
        <p>This endpoint is ready to receive form submissions.</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <p><strong>Sheet ID:</strong> ${SHEET_ID === 'YOUR_SHEET_ID' ? '⚠️ Not configured' : '✅ Configured'}</p>
        <hr>
        <p><em>This page confirms that your Google Apps Script Web App is deployed and accessible.</em></p>
      </body>
    </html>
  `;
  
  return HtmlService.createHtmlOutput(html);
}
