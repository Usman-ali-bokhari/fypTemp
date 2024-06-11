import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { Container, Card, CardHeader, CardBody, Nav, NavItem, NavLink, TabContent, TabPane, Progress } from 'reactstrap';

const journalLinks = {
  "Artificial Intelligence Review": "https://link.springer.com/journal/10462",
  "Applied Intelligence": "https://link.springer.com/journal/10489",
  "Artificial Intelligence": "https://aij.ijcai.org/",
  "Expert Systems with Applications": "https://www.sciencedirect.com/journal/expert-systems-with-applications",
  "Autonomous Agents and Multi-Agent Systems": "https://link.springer.com/journal/10458",
  "AI Magazine": "https://aaai.org/ai-magazine/",
  "Pattern Recognition": "https://www.sciencedirect.com/journal/pattern-recognition",
  "AI Communications": "https://www.iospress.com/catalog/journals/ai-communications",
  "Data Mining and Knowledge Discovery": "https://link.springer.com/journal/10618",
  "Neurocomputing": "https://www.sciencedirect.com/journal/neurocomputing",
  "International Journal of Approximate Reasoning": "https://www.sciencedirect.com/journal/international-journal-of-approximate-reasoning",
  "Neural Networks": "https://www.sciencedirect.com/journal/knowledge-based-systems/vol/8",
  "Knowledge-Based Systems": "https://www.scimagojr.com/journalsearch.php?q=24772&tip=sid&clean=0",
  "Information Sciences": "https://www.sciencedirect.com/journal/information-sciences"
};

export default function LitRev() {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseJournals, setResponseJournals] = useState([]);

  const handleTextChange = (event) => {
    setInputText(event.target.value);x
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const apiURL = 'https://d899-34-106-138-249.ngrok-free.app/predict'; // Update with your actual API endpoint
    try {
      console.log('Submitting text:', inputText);
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ abstract: inputText }),
      });
      const data = await response.json();
      console.log('Submission successful', data);
      setResponseJournals(data.journals[0]);
    } catch (error) {
      console.error('Error submitting text:', error);
      setResponseJournals(['An error occurred.']);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section section-tabs">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <h2 className="">Journal Recommendation</h2>
      </div>
      <Container>
        <Card>
          <CardHeader>
            <Nav className="nav-tabs-info" role="tablist" tabs>
              <NavItem>
                {/* Additional NavItems if needed */}
              </NavItem>
            </Nav>
          </CardHeader>
          <CardBody>
            <TabContent className="tab-space" activeTab={'link2'}>
              <TabPane tabId="link2">
                <p>Upload your paper's abstracts here to get journal recommendations.</p>
                <TextareaAutosize
                  placeholder="Enter paper here"
                  minRows={10}
                  maxRows={30}
                  className="textarea-autosize"
                  value={inputText}
                  onChange={handleTextChange}
                />
                {isLoading && (
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                  </Box>
                )}
                {!isLoading && responseJournals.length > 0 && (
                  <blockquote>
                    {responseJournals.map((journal, index) => (
                      <div key={index} className="LitRevResponse">
                        <p className="">
                          <a href={journalLinks[journal] || '#'} target="_blank" rel="noopener noreferrer">
                            {journal}
                          </a>
                        </p>
                        <div className="progress-container progress-info">
                          <span className="progress-badge">Rating</span>
                          <Progress max="100" value={(responseJournals.length-index)*12}>
                            <span className="progress-value">{(responseJournals.length-index)*12}%</span>
                          </Progress>
                        </div>
                        <br />
                      </div>
                    ))}
                    <small>- ScholarMate</small>
                  </blockquote>
                )}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                  <Button variant="contained" color="primary" onClick={handleSubmit} disabled={isLoading}>
                    Submit
                  </Button>
                </div>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
