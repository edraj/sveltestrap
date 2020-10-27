import { LocalSvelteComponent } from './shared';

export interface IDropdownMenuProps {
  dark?: boolean;
  right?: boolean;
}

declare class DropdownMenu extends LocalSvelteComponent<IDropdownMenuProps> {}
export default DropdownMenu;
