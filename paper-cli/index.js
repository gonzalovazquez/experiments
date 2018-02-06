const fetch = require('node-fetch');
const inquirer = require('inquirer');

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

let listOfDocuments = [];

/**
 * Fetch list of documents
 */
const fetchDocs = async () => {
  const res = await fetch('https://api.dropboxapi.com/2/paper/docs/list', {
    method: 'POST',
    headers: {
      'Authorization' : `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({}),
  });
  return res.json();
};

const getDocuments = async () => {
  try {
    const documents = await fetchDocs();
    listOfDocuments = documents.doc_ids;
    console.log(listOfDocuments);
  } catch(e) {
    console.error(e);
  }
};

getDocuments();



/**
 * Download specific document
 */

let doc_id = 'llitzQlVa0G7wfXFpO4k3';
let revision_doc_id = '1';

const fetchSpecificDoc = async () => {
  const res = await fetch('https://api.dropboxapi.com/2/paper/docs/download', {
    method: 'POST',
    headers: {
      'Authorization' : `Bearer ${ACCESS_TOKEN}`,
      'Dropbox-API-Arg': JSON.stringify({"doc_id":`${doc_id}`,"export_format":{".tag":"markdown"}})
    },
    data: {
      "filter_by": {".tag":"docs_created"},
      "sort_by": {".tag":"created"},
      "sort_order": {".tag":"descending"}
    }
  });
  return res.text();
};

const getSingleDoc = async () => {
  try {
    const doc = await fetchSpecificDoc();
    console.log(doc);
  } catch(e) {
    console.error(e);
  }
};

// getSingleDoc();