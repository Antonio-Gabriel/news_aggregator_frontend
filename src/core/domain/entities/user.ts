export class User {
  constructor(public props: App.Module.UserProps) {}

  public get id(): number {
    return this.props.id
  }

  public get name(): string {
    return this.props.name
  }

  public get created_at(): string {
    return this.props.created_at
  }

  public get updated_at(): string {
    return this.props.updated_at
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      createdAt: this.created_at,
      updatedAt: this.updated_at,
    }
  }
}
