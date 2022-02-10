const { v4: uuidv4 } = require("uuid");
const Panel = require("./Panel");

class Organization extends Panel {
  constructor(id) {
    super("PAM Organization", "pamlohavueltoahacer", "TOP");
    (this.DisplayName = "PAM Workspace"),
      (this.IDmemberCreator = uuidv4()),
      (this.URL = "/WorkspacePAM/" + this.id),
      (this.membership = uuidv4());
  }
}

module.exports = Organization;
