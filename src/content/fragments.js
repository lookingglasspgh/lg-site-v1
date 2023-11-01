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
      Visit this page on a mobile device and press the model&rsquo;s cube button to
      enter an AR view. For the best results, start by aiming your phone at a clear
      space. When the AR view is active you can use your fingers to scale and reposition the model.
      <br />
      <br />
      While viewing on desktop, click and drag the model to rotate the camera.
      Hold the shift key while dragging to pan the camera.
    </span>
  ),
  MODEL_ALT: '3D scene depicting four models of buildings in East Liberty',
  MODEL_URL: 'https://lg-site-assets.s3.us-east-2.amazonaws.com/fragments.glb',
  AR_VIEW: 'Activating AR View',
  QR_INSTRUCTIONS: 'Use the QR code below to visit this page on an AR compatible iOS or Android device.',
  QR_ALT: 'QR code directing to the url looking-glass.space/neighborhood-fragments',
  CUBE_NOTE: 'When the model has loaded, press the cube button within the model to enter an AR View.',
  CUBE_ALT: 'AR cube icon',
};

export default fragments;
