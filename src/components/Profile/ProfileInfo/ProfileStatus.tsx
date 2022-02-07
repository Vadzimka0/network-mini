import React, { ChangeEvent, ReactElement } from 'react';

type ProfileStatusType = {
  status: string;
  updateStatus: (st: string) => any;
};

export class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidUpdate(
    prevProps: Readonly<ProfileStatusType>,
    // prevState: Readonly<{}>,
  ): void {
    if (prevProps.status !== this.props.status) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        status: this.props.status,
      });
    }
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.currentTarget.value)
    this.setState({
      status: e.currentTarget.value,
    });
  };

  deactivateEditMode = (): void => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  activateEditMode = (): void => {
    this.setState({
      editMode: true,
    });
  };

  render(): ReactElement {
    return (
      <>
        {this.state.editMode ? (
          <div>
            <input
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode}
              type="text"
              value={this.props.status}
              autoFocus
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || '-------'}
            </span>
          </div>
        )}
      </>
    );
  }
}
