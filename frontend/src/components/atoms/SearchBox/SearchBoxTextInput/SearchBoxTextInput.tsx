import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const placeList = [
  { place: 'Earth p1' },
  { place: 'Earth p2' },
  { place: 'Earth p3' },
  { place: 'Venus p1' },
  { place: 'Venus p2' },
  { place: 'Venus p3' },
  { place: 'Mars p1' },
  { place: 'Mars p2' },
  { place: 'Mars p3' },
];

export default function SearchBoxTextInput({label}: {label: string}) {
  const [selectedValue, setSelectedValue] = React.useState<string | null>(null);

  const handleSelect = (event: React.ChangeEvent<{}>, value: string | null) => {
    setSelectedValue(value);
    console.log(value);
  };

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={placeList.map((option) => option.place)}
        onChange={handleSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

