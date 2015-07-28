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

var _renderContent = function() {
  var type = this.props.content.type;
  var paragraphBody = (
    <div>
      <div className="col-xs-5">
        <div className="form-group">
          <label>Japanese</label>
          <textarea className="form-control span4" placeholder="段落" required value={this.props.content.content.ja} lang="ja" onChange={this.onChange} data-index={this.props.index} />
        </div>
      </div>
      <div className="col-xs-5">
        <div className="form-group">
          <label>English</label>
          <textarea className="form-control span4" placeholder="Paragraph" required value={this.props.content.content.en} lang="en" onChange={this.onChange} data-index={this.props.index} />
        </div>
      </div>
    </div>
  );
  var headingBody = (
    <div>
      headingbody
    </div>
  );
  var imageBody = (
    <div>
      imagebody
    </div>
  );
  var contentBody;
  if (type == ContentType.Heading) {
    contentBody = headingBody;
  }
  else if (type == ContentType.Image) {
    contentBody = imageBody;
  }
  else {
    contentBody = paragraphBody;
  }
  return (
    <div className="row">
      <div className="col-xs-2">
        <h2 className="text-capitalize">{this.props.content.type}</h2>
        <div className="form-group text-right">
          <label>
            <input type="checkbox" data-index={this.props.index} checked={this.props.content.summary} onChange={this.onClickedCheckbox} />&nbsp;
            Summary
          </label>
          <button className="btn btn-default btn-xs" type="button" data-index={this.props.index} onClick={this.onClickedRemove} ><span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete</button>
        </div>
      </div>
      {contentBody}
    </div>
  );
};

var Content = React.createClass({
  onChange: function(event) {
    var index = event.target.dataset.index;
    var lang = event.target.lang;
    data.contents[index]['content'][lang] = event.target.value;
    this.props.update();
  },
  onClickedCheckbox: function(event) {
    var index = event.target.dataset.index;
    data.contents[index]['summary'] = event.target.checked
    this.props.update();
  },
  onClickedRemove: function(event) {
    var index = event.currentTarget.dataset.index;
    data.contents.splice(index, 1);
    this.props.update();
  },
  render: _renderContent
});

/*
var Paragraph = React.createClass({
  onChange: function(event) {
    var index = event.target.dataset.index;
    var lang = event.target.lang;
    data.contents[index]['content'][lang] = event.target.value;
    this.props.update();
  },
  onClickedCheckbox: function(event) {
    var index = event.target.dataset.index;
    data.contents[index]['summary'] = event.target.checked
    this.props.update();
  },
  onClickedRemove: function(event) {
    var index = event.currentTarget.dataset.index;
    data.contents.splice(index, 1);
    this.props.update();
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-2">
          <h2>Paragraph</h2>
          <div className="form-group text-right">
            <label>
              <input type="checkbox" data-index={this.props.index} checked={this.props.content.summary} onChange={this.onClickedCheckbox} />&nbsp;
              Summary
            </label>
            <button className="btn btn-default btn-xs" type="button" data-index={this.props.index} onClick={this.onClickedRemove} ><span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete</button>
          </div>
        </div>
        <div className="col-xs-5">
          <div className="form-group">
            <label>Japanese</label>
            <textarea className="form-control span4" placeholder="段落" required value={this.props.content.content.ja} lang="ja" onChange={this.onChange} data-index={this.props.index} />
          </div>
        </div>
        <div className="col-xs-5">
          <div className="form-group">
            <label>English</label>
            <textarea className="form-control span4" placeholder="Paragraph" required value={this.props.content.content.en} lang="en" onChange={this.onChange} data-index={this.props.index} />
          </div>
        </div>
      </div>
    );
  }
});
*/

var ContentList =  React.createClass({
  render: function() {
    return (
      <div>
        {this.props.contents.map(function(content, index) {
          //return <Paragraph content={content} update={this.props.update} index={index} />
          return <Content content={content} update={this.props.update} index={index} />
         }.bind(this))}
      </div>
    );
  }
});

var TitleArea = React.createClass({
  onChange: function(event) {
    data['title'][event.target.lang] = event.target.value;
    this.props.update();
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-2">
          <h2>Title</h2>
        </div>
        <div className="col-xs-10">
          <div className="form-group">
            <label for="exampleInputEmail1">Japanese</label>
            <input type="text" className="form-control" id="title-ja" placeholder="日本語のタイトル" value={this.props.data.title.ja} required lang="ja" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">English</label>
            <input type="text" className="form-control" id="title-en" placeholder="Title in English" value={this.props.data.title.en} required required lang="en" onChange={this.onChange} />
          </div>
        </div>
      </div>
    );
  }
});

var ProfileArea = React.createClass({
  onChange: function(event) {
    if (event.target.name == 'icon') {
      data['profile'][event.target.name] = event.target.value;
    }
    else {
      data['profile'][event.target.name][event.target.lang] = event.target.value;
    }
    this.props.update();
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-2">
          <h2>Profile</h2>
        </div>
        <div className="col-xs-10">
          <div className="form-group">
            <label className="col-xs-2 control-label"></label>
            <label className="col-xs-5 control-label">Japanese</label>
            <label className="col-xs-5 control-label">English</label>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label text-right">Name</label>
            <div className="col-xs-5 form-group">
              <input type="text" className="form-control" id="profile-name-ja" placeholder="楽天 太郎" value={this.props.profile.name.ja} required onChange={this.onChange} name="name" lang="ja" />
            </div>
            <div className="col-xs-5 form-group">
              <input type="text" className="form-control col-sm-5" id="profile-name-en" placeholder="Taro Rakuten" value={this.props.profile.name.en} required onChange={this.onChange} name="name" lang="en" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label text-right">Title</label>
            <div className="col-xs-5 form-group">
              <input type="text" className="form-control" id="profile-title-ja" placeholder="デザイナー、ディレクター等" value={this.props.profile.title.ja} required name="title" lang="ja" onChange={this.onChange} />
            </div>
            <div className="col-xs-5 form-group">
              <input type="text" className="form-control col-sm-5" id="profile-title-en" placeholder="Designer, Director, etc..." value={this.props.profile.title.en} required name="title" lang="en" onChange={this.onChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label text-right">Department</label>
            <div className="col-xs-5 form-group">
              <input type="text" className="form-control" id="profile-department-ja" placeholder="編成部" value={this.props.profile.department.ja} required onChange={this.onChange} name="department" lang="ja" />
            </div>
            <div className="col-xs-5 form-group">
              <input type="text" className="form-control col-sm-5" id="profile-department-en" placeholder="Creative & Web Design Department" value={this.props.profile.department.en} required onChange={this.onChange} name="department" lang="en" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-xs-2 control-label text-right">Icon URL</label>
            <div className="col-xs-10 form-group">
              <input type="url" className="form-control" id="profile-icon" placeholder="http://rakutencreative.tumblr.com/your/icon/path.jpg" value={this.props.profile.icon} onChange={this.onChange} name="icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var AppendButtons = React.createClass({
  onClick: function(event) {
    event.preventDefault();
    // data handling
    data.contents.push({
      type: event.target.name,
      summary: false,
      content: {
        ja: "",
        en: ""
      }
    });
    this.props.update();
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-2">
        </div>
        <div className="col-xs-10 text-center">
          <div className="form-group">
            <button type="button" className="btn btn-default" onClick={this.onClick} name={ContentType.Heading} >Add Heading</button>&nbsp;
            <button type="button" className="btn btn-default"  onClick={this.onClick} name={ContentType.Paragraph}>Add Paragraph</button>&nbsp;
            <button type="button" className="btn btn-default"  onClick={this.onClick} name={ContentType.Image}>Add Image</button>
          </div>
        </div>
      </div>
    );
  }
});

var GenerationArea = React.createClass({
  code: "",
  onClick: function(event) {
    //
    var form = document.getElementsByTagName('form')[0];
    if ( form.checkValidity() ) {
      event.preventDefault();
      this.code = JSON.stringify(data);
      this.props.update();
    }
    else {
      //event.stopPropagation();
    }
  },
  render: function() {
    return (
      <div className="row text-center">
        <div className="col-xs-2">
        </div>
        <div className="col-xs-10">
          <hr />
          <div className="form-group">
            <button type="submit" className="btn btn-primary" onClick={this.onClick}>Generate Code</button>
          </div>
          <div className="form-group">
            <textarea className="form-control" readonly value={this.code} />
          </div>
        </div>
      </div>
    );
  }
});

var FormArea = React.createClass({
  componentDidMount: function() {
    var temp = localStorage.getItem('data');
    if (temp) {
      data = JSON.parse(temp);
      console.log('load');
      console.log(data);
    }
    this.setState({data: data});
  },
  getInitialState: function() {
    return {data: data};
  },
  update: function() {
    // update
    this.setState({data: data});
    // save
    localStorage.setItem('data', JSON.stringify(data));
    console.log('save', data);
  },
  render: function() {
    return (
      <div className="container-fluid">
        <form>
          <TitleArea data={this.state.data} update={this.update} />
          <ContentList contents={this.state.data.contents} update={this.update} />
          <AppendButtons update={this.update} />
          <ProfileArea profile={this.state.data.profile} update={this.update} />
          <GenerationArea update={this.update} />
        </form>
      </div>
    );
  }
});

React.render(
  <FormArea data={data} />,
  document.getElementById('mainArea')
);
