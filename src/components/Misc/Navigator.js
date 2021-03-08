import { useHistory } from "react-router-dom";

export default function Navigator(name) {
  return useHistory().push(`/admin/measures/${name}`);
}