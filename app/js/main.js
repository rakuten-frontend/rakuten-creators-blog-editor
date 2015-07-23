var data = {
  title: {
    ja: "",
    en: ""
  },
  contents: [
  ],
  profile: {
    icon: "",
    name: {
      ja: "",
      en: ""
    },
    title: {
      ja: "",
      en: ""
    },
    department: {
      ja: "編成部",
      en: "Creative & Web Design Department"
    }
  }
};

var FormArea = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <TitleArea />
      </div>
    );
  }
});

var TitleArea = React.createClass({
  render: function() {
    return (
    <div className="row">
     <div className="col-md-2">
      <h2>Title</h2>
     </div>
     <div className="col-md-10">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Japanese</label>
          <input type="text" className="form-control" id="title-ja" placeholder="日本語のタイトル" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">English</label>
          <input type="text" className="form-control" id="title-en" placeholder="Title in English" />
        </div>
      </form>
     </div>
    </div>
    );
  }
});

React.render(
  <FormArea />,
  document.getElementById('mainArea')
);
