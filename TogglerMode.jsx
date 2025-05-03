import { useReducer } from "react";

const initialState = { theme: 'light', count: 0 };

function themeReducer(state, action) {
  switch (action.type) {
    case 'Toggle':
      return {
        theme: state.theme === 'light' ? 'dark' : 'light',
        count: state.count + 1
      };
    default:
      return state;
  }
}

function TogglerMode() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const isLight = state.theme === 'light';

  const containerStyle = {
    backgroundColor: isLight ? '#fff' : '#333',
    color: isLight ? '#000' : '#fff',
    transition: 'all 0.4s ease',
    textAlign: 'center',
    padding: '50px',
    minHeight: '100vh'
  };

  const toggleWrapperStyle = {
    display: 'inline-block',
    position: 'relative',
    width: '60px',
    height: '34px',
    margin: '20px',
    cursor: 'pointer'
  };

  const sliderStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: isLight ? '#333' : '#fff',
    borderRadius: '34px',
    transition: '.4s'
  };

  const circleStyle = {
    position: 'absolute',
    height: '26px',
    width: '26px',
    left: isLight ? '4px' : '30px',
    bottom: '4px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    transition: '.4s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <h1>{state.theme.toUpperCase()} MODE</h1>

      <div style={toggleWrapperStyle} onClick={() => dispatch({ type: 'Toggle' })}>
        <div style={sliderStyle}>
          <div style={circleStyle}>
            {isLight ? '🌞' : '🌙'}
          </div>
        </div>
      </div>

      <p>Toggle Count: {state.count}</p>
    </div>
  );
}

export default TogglerMode;