import { 
  fitSelection,
} from 'react-svg-pan-zoom';

import {
  UPDATE_2D_CAMERA,
  SELECT_TOOL_PAN,
  SELECT_TOOL_ZOOM_IN,
  SELECT_TOOL_ZOOM_OUT,
  FIT_SELECTION,
  MODE_2D_PAN,
  MODE_2D_ZOOM_IN,
  MODE_2D_ZOOM_OUT
} from '../utils/constants';

export default function (state, action) {
  switch (action.type) {
    case UPDATE_2D_CAMERA:
      return state.merge({viewer2D: action.value});

    case SELECT_TOOL_PAN:
      return state.set('mode', MODE_2D_PAN);

    case SELECT_TOOL_ZOOM_IN:
      return state.set('mode', MODE_2D_ZOOM_IN);

    case SELECT_TOOL_ZOOM_OUT:
      return state.set('mode', MODE_2D_ZOOM_OUT);

    case FIT_SELECTION:
      const viewer2D = state.get('viewer2D');
      const newViewer2D = fitSelection(
        viewer2D.toJS(), 
        action.value.x, action.value.y, 
        action.value.width, action.value.height
      );

      return state.merge({viewer2D: newViewer2D});
  }
}
