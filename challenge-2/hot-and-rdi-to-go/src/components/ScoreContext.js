import React, { useReducer, useState } from "react";

export const ScoreContext = React.createContext({});

//reducer set up
const initialUser = {
  salty: 0,
  sweet: 0,
  healthy: 0,
  experimental: 0,
};

// dispatch(increment sweet by 15)

// sort

// pass in dispatch with an object of type and payload

//example: dispatchUserProfile({ type: "changeSaltyBy", payload: 5})

//increases salty score by 5
const userProfileChanger = (userProfile, action) => {
  switch (action.type) {
    case "changeSaltyBy": {
      return {
        ...userProfile,
        salty: userProfile.salty + action.payload,
      };
    }

    case "changeSweetBy": {
      return {
        ...userProfile,
        sweet: userProfile.sweet + action.payload,
      };
    }

    case "changeHealthyBy": {
      return {
        ...userProfile,
        healthy: userProfile.healthy + action.payload,
      };
    }

    case "changeExperimentalBy": {
      return {
        ...userProfile,
        experimental: userProfile.experimental + action.payload,
      };
    }
    case "resetProfile": {
      return { ...initialUser };
    }
  }
};

export function ScoreProvider(props) {
  //state variable for progression

  //Number 0-10 for how many questions completed
  const [progression, setProgression] = useState(0);

  //reducer for the user's profile
  const [userProfile, dispatchUserProfile] = useReducer(
    userProfileChanger,
    initialUser
  );
  const questionList = [
    {
      question: "BONELESS!?!?!?!!?!?",
      response: clickedBoneless,
    },
    {
      question: "Do you feel the magic?",
      response: clickedMagic,
    },
    {
      question: "Do you have a family history of high cholesterol?",
      response: clickedCholesterol,
    },
    {
      question: "Somebody once told me the world was gonna roll me?",
      response: clickedRolled,
    },
    {
      question: "Would you feel at home at Charlie’s Chocolate Factory?",
      response: clickedChocolate,
    },
    {
      question: "Do you even lift bro?",
      response: clickedLift,
    },
  ];

  //FUNCTIONS FOR FOOD CLICKING
  function clickedMagic(response) {
    if (response) {
      dispatchUserProfile({ type: "changeExperimentalBy", payload: 20 });
    }
    setProgression((prevProgression) => (prevProgression + 1) % 6);
  }

  function clickedBoneless(response) {
    if (response) {
      dispatchUserProfile({ type: "changeSaltyBy", payload: -5 });
      dispatchUserProfile({ type: "changeSweetBy", payload: 5 });
      dispatchUserProfile({ type: "changeHealthyBy", payload: -5 });
    }
    setProgression((prevProgression) => (prevProgression + 1) % 6);
  }

  function clickedCholesterol(response) {
    if (response) {
      dispatchUserProfile({ type: "changeSaltyBy", payload: -20 });
      dispatchUserProfile({ type: "changeSweetBy", payload: -15 });
      dispatchUserProfile({ type: "changeHealthyBy", payload: 10 });
    }
    setProgression((prevProgression) => (prevProgression + 1) % 6);
  }

  function clickedRolled(response) {
    if (response) {
      dispatchUserProfile({ type: "changeExperimentalBy", payload: 10 });
      dispatchUserProfile({ type: "changeSweetBy", payload: -5 });
      dispatchUserProfile({ type: "changeHealthyBy", payload: -5 });
    }
    setProgression((prevProgression) => (prevProgression + 1) % 6);
  }

  function clickedChocolate(response) {
    if (response) {
      dispatchUserProfile({ type: "changeSweetBy", payload: 10 });
      dispatchUserProfile({ type: "changeExperimentalBy", payload: 5 });
      dispatchUserProfile({ type: "changeHealthyBy", payload: -5 });
    }
    setProgression((prevProgression) => (prevProgression + 1) % 6);
  }

  function clickedLift(response) {
    if (response) {
      dispatchUserProfile({ type: "changeHealthyBy", payload: -10 });
    }
    setProgression((prevProgression) => (prevProgression + 1) % 6);
  }

  return (
    <ScoreContext.Provider
      value={{
        progression,
        setProgression,
        userProfile,
        dispatchUserProfile,
        questionList,
      }}
    >
      {props.children}
    </ScoreContext.Provider>
  );
}

export function MenuPage(props) {
  return (
    <ScoreProvider>
      <MenuPageContent />
    </ScoreProvider>
  );
}

//put in your page content here
export function MenuPageContent(props) {
  return <div>This is our menu content page!</div>;
}
