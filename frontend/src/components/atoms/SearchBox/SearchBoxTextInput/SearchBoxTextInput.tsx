import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { getAllDestination } from '@/services/destination/destinationService'; 

export default function SearchBoxTextInput({
  label,
  setInput
}: {
  label: string;
  setInput: (value: string | null) => void;
}) {
  const [selectedValue, setSelectedValue] = React.useState<string | null>(null);
  const [placeList, setPlaceList] = React.useState<any[]>([]);

  React.useEffect(() => {
    // Fetch tour data here
    const fetchTours = async () => {
      const data = await getAllDestination();
      console.log(data);
      setPlaceList(data);
    };
    fetchTours();
  }, []);

  const handleSelect = (event: React.ChangeEvent<{}>, value: string | null) => {
    setSelectedValue(value);
    setInput(value);
  };

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={placeList.map((option) => option.planet + " " + option.place)}
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

