import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { Burger } from "@mantine/core";
import { navLinks } from "./Header";

const SideBar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root
        className="md:hidden !-z-10" // This is the class that makes the sidebar hidden on medium screens
        position="right"
        size="50vw"
        opened={opened}
        onClose={toggle}
      >
        <Drawer.Overlay
          className="!-z-0"
          style={{ backgroundOpacity: 0.5, blur: 5 }}
        />
        <Drawer.Content className="!-z-0" bg={"#0a192f"}>
          <Drawer.Body className="mt-20 flex flex-col gap-5" bg={"#0a192f"}>
            {navLinks(true)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      <Burger
        className="md:hidden !z-10"
        size="lg"
        color="#64ffda"
        opened={opened}
        onClick={toggle}
      />
    </>
  );
};
export default SideBar;
