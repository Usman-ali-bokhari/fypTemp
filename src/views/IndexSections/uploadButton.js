import React, { useState, useEffect } from 'react';
import {
  MultipleFileUpload,
  MultipleFileUploadMain,
} from '@patternfly/react-core';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const MultipleFileUploadBasic = () => {
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [sections, setSections] = useState({
    methodology: "",
    evaluation: "",
    critical: "",
    proposed: "",
    summary: ""
  });
  const [loadingSections, setLoadingSections] = useState({
    methodology: false,
    evaluation: false,
    critical: false,
    proposed: false,
    summary: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFileDrop = async (_event, droppedFiles) => {
    const formData = new FormData();
    formData.append('file', droppedFiles[0]); // Assuming single file upload
    setIsLoading(true);
    try {
      const response = await fetch('https://77a7-35-233-158-247.ngrok-free.app/upload/', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (response.ok) {
        setSections(result); // Populate the sections only if response is OK
      } else {
        console.error('Upload failed', result);
        setSections({});
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setSections({});
    } finally {
      setIsLoading(false);
    }
  };

  const updateSection = async (sectionName) => {
    setLoadingSections(prev => ({ ...prev, [sectionName]: true }));
    try {
      const response = await fetch(`https://206f-35-197-147-129.ngrok-free.app/${sectionName}/`, {
        method: 'POST'
      });
      const data = await response.json();
      if (response.ok) {
        setSections(prev => ({ ...prev, [sectionName]: data.summary || '' }));
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error(`Failed to update section ${sectionName}:`, error);
    } finally {
      setLoadingSections(prev => ({ ...prev, [sectionName]: false }));
    }
  };

  // Only render sections if any key has a non-empty value
  const hasContent = Object.values(sections).some(value => value !== "");

  return (
    <>
      <MultipleFileUpload onFileDrop={handleFileDrop} dropzoneProps={{ accept: {'application/pdf': ['.pdf']} }} isHorizontal={isHorizontal} style={{ color: 'black', marginBottom: '20px' }}>
        <MultipleFileUploadMain titleIcon={<UploadIcon />} titleText="Drag and drop files here" titleTextSeparator="or" infoText="Accepted file types: PDF" />
      </MultipleFileUpload>
      {isLoading && <Box sx={{ width: '100%' }}><LinearProgress /></Box>}
      {!isLoading && hasContent && (
        <div style={{ padding: '20px' }}>
          {Object.entries(sections).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ marginRight: '10px', flex: 1 }}>
                <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                <p className="LitRevResponse">
                  {value}
                  <br />
                  <small>- ScholarMate</small>
                </p>
              </div>
              {loadingSections[key] ? (
                <Box sx={{ width: '50px' }}><LinearProgress /></Box>
              ) : (
                <Button onClick={() => updateSection(key)} variant="contained" size="small" style={{ backgroundColor: 'black', color: 'white' }}>
                  Rerun
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
