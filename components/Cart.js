import { Drawer } from '@mantine/core';
import { useState } from 'react';

export default function Cart() {

  const [opened, setOpened] = useState(false);

  return (
    <Drawer
      opened={opened}
      onClose={() => setOpened(false)}
      title="Register"
      padding="xl"
      size="xl"
    >
      {/* Drawer content */}
    </Drawer>
  );
  
}