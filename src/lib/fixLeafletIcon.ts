import L from "leaflet";
import icon2x from "leaflet/dist/images/marker-icon-2x.png";
import icon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

type DefaultIconPrototype = L.Icon & {
  _getIconUrl?: () => string;
};

export function fixLeafletIcons() {
  const prototype = L.Icon.Default.prototype as DefaultIconPrototype;
  delete prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: icon2x.src || icon2x,
    iconUrl: icon.src || icon,
    shadowUrl: shadow.src || shadow,
  });
}
