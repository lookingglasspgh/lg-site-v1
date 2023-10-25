/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

const fragments = {
  TITLE: 'Neighborhood Fragments',
  DESCRIPTION: (
    <span>
      Neighborhood Fragments is an AR experiment created with drone photography
      and photogrammetry and inspired by questions around historic preservation and
      digital-aided analysis.
      <br />
      <br />
      Juxtaposed within this 3D scene are captures of spaces in East Liberty representing
      community anchors (Kelly Strayhorn Theater and Rodman Street Missionary Baptist Church)
      and signs of the exclusionary development that has reshaped the neighborhood.
      <br />
      <br />
      While viewing on desktop, click and drag the model to rotate the camera within the scene.
      Hold the shift key while dragging to pan the camera. Visit this page on a mobile device
      to see the model within an AR view.
    </span>
  ),
  MODEL_URL: 'https://lg-site-assets.s3.us-east-2.amazonaws.com/east_liberty_fragments.glb',
  MODEL_ALT: '3D scene depicting four models of buildings in East Liberty',
  AR_VIEW: 'Activating AR View',
  QR_INSTRUCTIONS: 'Use the QR code below to visit this page on an AR compatible iOS or Android device.',
  QR_ALT: 'QR code directing to the url looking-glass.space/neighborhood-fragments',
  CUBE_NOTE: 'When the model has loaded, press the cube button within the model to enter an AR View.',
  CUBE_ALT: 'AR cube icon',
};

export default fragments;
