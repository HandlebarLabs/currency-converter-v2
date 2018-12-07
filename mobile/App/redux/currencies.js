// Action Types
export const SWAP_CURRENCY = "SWAP_CURRENCY";
export const CHANGE_BASE_CURRENCY = "CHANGE_BASE_CURRENCY";
export const CHANGE_QUOTE_CURRENCY = "CHANGE_QUOTE_CURRENCY";
export const GET_INITIAL_CONVERSION = "GET_INITIAL_CONVERSION";

export const CONVERSION_RESULT = "CONVERSION_RESULT";
export const CONVERSION_ERROR = "CONVERSION_ERROR";

// Helpers
const getLatestRates = (currency, dispatch) => {
  return fetch(`http://localhost:3000/latest?base=${currency}`)
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        throw new Error(response.error);
      }

      dispatch({
        type: CONVERSION_RESULT,
        result: response
      });
    })
    .catch(error => {
      dispatch({
        type: CONVERSION_ERROR,
        error: error.message
      });
    });
};

// Actions
export const getInitialConversion = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_INITIAL_CONVERSION });

    const base = getState().currencies.baseCurrency;
    return getLatestRates(base, dispatch);
  };
};

export const swapCurrency = () => {
  return (dispatch, getState) => {
    dispatch({
      type: SWAP_CURRENCY
    });

    const base = getState().currencies.baseCurrency;
    return getLatestRates(base, dispatch);
  };
};

export const changeBaseCurrency = currency => {
  return dispatch => {
    dispatch({
      type: CHANGE_BASE_CURRENCY,
      currency
    });
    return getLatestRates(currency, dispatch);
  };
};

export const changeQuoteCurrency = currency => ({
  type: CHANGE_QUOTE_CURRENCY,
  currency
});

// Reducer
const initialState = {
  baseCurrency: "USD",
  quoteCurrency: "GBP",
  conversions: {},
  error: null
};

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: "",
    rates: {}
  };

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }

  return {
    ...state.conversions,
    [action.currency]: conversion
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversions(state, action)
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency
      };
    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversions: setConversions(state, { currency: state.baseCurrency })
      };
    case CONVERSION_RESULT:
      return {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            ...action.result
          }
        }
      };
    case CONVERSION_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
