import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

export default function LoadingButtons() {
  return (
    <LoadingButton loading className="outline-dashed">
      Loading
    </LoadingButton>
  );
}
