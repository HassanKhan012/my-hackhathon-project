import React from 'react';
import Button from '@mui/material/Button'; // Importing Button from Material UI
import './EditorPick.css'; // Import the custom CSS file

const EditorPick = () => {
  return (
    <div className="mt-20"> {/* Added margin-top */}
      <h1 className="text-3xl font-bold mb-4 text-center">EDITOR&apos;S PICK</h1>
      <p className="mb-6 text-center">Problems trying to resolve the conflict between</p>

      {/* Flexbox layout for the first row (Men, Women, and Accessories) */}
      <div className="flex justify-center gap-8"> {/* Increased gap to gap-8 */}
        {/* Men's Card */}
        <div className="relative w-1/3 h-96">
          <img src="/images/man.jpeg" alt="Men's jacket" className="w-full h-full object-cover" />
          <Button
            variant="contained"
            sx={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'white', // Set background color to white
              color: 'black',            // Set text color to black
              '&:hover': {
                backgroundColor: '#f0f0f0', // Lighter gray on hover
              },
            }}
          >
            MEN
          </Button>
        </div>

        {/* Women's Card */}
        <div className="relative w-1/6 h-96">
          <img src="/images/women.jpeg" alt="Women's sweater" className="w-full h-full object-cover" />
          <Button
            variant="contained"
            sx={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'white', // Set background color to white
              color: 'black',            // Set text color to black
              '&:hover': {
                backgroundColor: '#f0f0f0', // Lighter gray on hover
              },
            }}
          >
            WOMEN
          </Button>
        </div>

        {/* Accessories Card */}
        <div className="relative w-40 editor-pick-accessories">
          <img src="/images/accessories.jpeg" alt="Accessories" className="h-full object-cover" />
          <Button
            variant="contained"
            sx={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'white', // Set background color to white
              color: 'black',            // Set text color to black
              '&:hover': {
                backgroundColor: '#f0f0f0', // Lighter gray on hover
              },
            }}
          >
            ACCESSORIES
          </Button>

          {/* Kids Card positioned under Accessories card */}
          <div className="relative w-40 editor-pick-kids mt-2">
            <img src="/images/kids.jpeg" alt="Kids shirt" className="w-full h-full object-cover" />
            <Button
              variant="contained"
              sx={{
                position: 'absolute',
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'white', // Set background color to white
                color: 'black',            // Set text color to black
                '&:hover': {
                  backgroundColor: '#f0f0f0', // Lighter gray on hover
                },
              }}
            >
              KIDS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPick;
