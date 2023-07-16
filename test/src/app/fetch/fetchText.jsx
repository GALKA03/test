export const fetchText = async (text) => {
  try {
    const response = await fetch('/api/text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    
    console.log('response', response);
    
    // if (response.ok) {
    //   const responseBody = await response.text();
    //   console.log('response body:', responseBody);
      
    //   const data = JSON.parse(responseBody);
    //   console.log('dataFetch', data)
    //   return data.result;
    if (response.ok) {
      const responseBody = await response.json();
      console.log('response body:', responseBody);
      const uniqueCharacter = responseBody.result;
      return uniqueCharacter;
    } else {
      throw new Error('Error processing text');
    }
  } catch (error) {
    console.error('Error processing text:', error);
    return null;
  }
};

