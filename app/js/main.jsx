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
        <div className="col-md-2">
          <h2>Paragraph</h2>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <label>Japanese</label>
            <textarea className="form-control span4" placeholder="段落" required>
              {this.props.content.ja}
            </textarea>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <label>English</label>
            <textarea className="form-control span4" placeholder="Paragraph" required>
              {this.props.content.en}
            </textarea>
          </div>
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
     <div className="col-md-2">
      <h2>Title</h2>
     </div>
     <div className="col-md-10">
       <div className="form-group">
          <label for="exampleInputEmail1">Japanese</label>
          <input type="text" className="form-control" id="title-ja" placeholder="日本語のタイトル" value={this.props.data.title.ja} required />
       </div>
       <div className="form-group">
         <label for="exampleInputPassword1">English</label>
         <input type="text" className="form-control" id="title-en" placeholder="Title in English" value={this.props.data.title.en} required />
       </div>
     </div>
    </div>
    );
  }
});

var ProfileArea = React.createClass({
  getInitialState: function() {
    return this.props.profile;
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-2">
          <h2>Profile</h2>
        </div>
        <div className="col-md-10">
          <div className="form-group">
            <label className="col-sm-2 control-label"></label>
            <label className="col-sm-5 control-label">Japanese</label>
            <label className="col-sm-5 control-label">English</label>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label text-right">Name</label>
            <div className="col-sm-5 form-group">
              <input type="text" className="form-control" id="profile-name-ja" placeholder="楽天 太郎" value={this.state.name.ja} required />
            </div>
            <div className="col-sm-5 form-group">
              <input type="text" className="form-control col-sm-5" id="profile-name-en" placeholder="Taro Rakuten" value={this.state.name.en} required />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label text-right">Title</label>
            <div className="col-sm-5 form-group">
              <input type="text" className="form-control" id="profile-title-ja" placeholder="デザイナー、ディレクター等" value={this.state.title.ja} required />
            </div>
            <div className="col-sm-5 form-group">
              <input type="text" className="form-control col-sm-5" id="profile-title-en" placeholder="Designer, Director, etc..." value={this.state.title.en} required />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label text-right">Department</label>
            <div className="col-sm-5 form-group">
              <input type="text" className="form-control" id="profile-department-ja" placeholder="編成部" value={this.state.department.ja} required />
            </div>
            <div className="col-sm-5 form-group">
              <input type="text" className="form-control col-sm-5" id="profile-department-en" placeholder="Creative & Web Design Department" value={this.state.department.en} required />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label text-right">Icon URL</label>
            <div className="col-sm-10 form-group">
              <input type="url" className="form-control" id="profile-icon" placeholder="http://rakutencreative.tumblr.com/your/icon/path.jpg" value={this.state.icon} required />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var AppendButtons = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-2">
        </div>
        <div className="col-md-10 text-center">
          <div className="form-group">
            <button className="btn btn-default">Add Heading</button>&nbsp;
            <button className="btn btn-default">Add Paragraph</button>&nbsp;
            <button className="btn btn-default">Add Image</button>
          </div>
        </div>
      </div>
    );
  }
});

var FormArea = React.createClass({
  getInitialState: function() {
    return {data: data};
  },
  render: function() {
    return (
      <div className="container-fluid">
        <form>
          <TitleArea data={this.state.data} />
          <ContentList contents={this.state.data.contents} />
          <AppendButtons />
          <ProfileArea profile={this.state.data.profile} />
        </form>
      </div>
    );
  }
});

React.render(
  <FormArea data={data} />,
  document.getElementById('mainArea')
);
