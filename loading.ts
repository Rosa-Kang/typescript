type ResourceLoadState = LoadingState | SuccessState | FailState;
type LoadingState = {
  state: 'loading';
};

type SuccessState = {
  state: 'success';
  response: {
    body: string;
  };
};

type FailState = {
  state: 'fail';
  reason: string;
};
function printLoadingState(state: ResourceLoadState) {
  switch (state.state) {
    case 'loading':
      console.log('loading..');
      break;
    case 'success':
      console.log('success');
      break;
    case 'fail':
      console.log('failed');
      break;
  }
}
