const ContentType = {
  Paragraph: 'paragraph',
  Image:     'image',
  Heading:   'heading'
};

var data = {
  title: {
    ja: "",
    en: ""
  },
  contents: [
    {
      type: ContentType.Paragraph,
      summary: true,
      content: {
        ja: "",
        en: ""
      }
    },
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

var Paragraph =  React.createClass({
  render: function() {
    return (
    <div className="row">
     <div className="col-md-3">
      <h2>Paragraph</h2>
     </div>
     <div className="col-md-4">
      <div className="form-group">
        <label>Japanese
        <textarea className="form-control" placeholder="段落">
          {this.props.content.ja}
        </textarea>
        </label>
       </div>
     </div>
     <div className="col-md-4">
      <div className="form-group">
        <label>English
        <textarea className="form-control" placeholder="Paragraph">
          {this.props.content.en}
        </textarea>
          </label>
      </div>
     </div>
     <div className="col-md-1">
     </div>
    </div>
    );
  }
});

var ContentList =  React.createClass({
  render: function() {
    return (
      <div>
      {this.props.contents.map(function(content) {
        if (content.type === ContentType.Paragraph) {
          return <Paragraph content={content} />
        }
        else {
          return <div>{content.type}</div>;
        }
      })}
      </div>
    );
  }
});

var TitleArea = React.createClass({
  render: function() {
    return (
    <div className="row">
     <div className="col-md-3">
      <h2>Title</h2>
     </div>
     <div className="col-md-9">

        <div className="form-group">
          <label for="exampleInputEmail1">Japanese</label>
          <input type="text" className="form-control" id="title-ja" placeholder="日本語のタイトル" value={this.props.data.title.ja} />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">English</label>
          <input type="text" className="form-control" id="title-en" placeholder="Title in English" value={this.props.data.title.en} />
        </div>

     </div>
    </div>
    );
  }
});

var ProfileArea = React.createClass({
  render: function() {
    return (
    <div className="row">
     <div className="col-md-3">
      <h2>Profile</h2>
     </div>
     <div className="col-md-9">
     </div>
    </div>
    );
  }
});

var AppendButtons = React.createClass({
  render: function() {
    return (
    <div className="row">
     <div className="col-md-3">
     </div>
     <div className="col-md-9 text-center">
      <button className="btn btn-default">Add Heading</button>
      <button className="btn btn-default">Add Paragraph</button>
      <button className="btn btn-default">Add Image</button>
     </div>
    </div>
    );
  }
});

var FormArea = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <form>
          <TitleArea data={this.props.data} />
          <ContentList contents={this.props.data.contents} />
          <AppendButtons />
          <ProfileArea />
        </form>
      </div>
    );
  }
});

React.render(
  <FormArea data={data} />,
  document.getElementById('mainArea')
);
