export class Category {
  constructor(public props: App.Module.CategoryProps) {}

  public get id(): number {
    return this.props.id
  }

  public get name(): string {
    return this.props.name
  }

  public get createdAt(): string {
    return this.props.createdAt
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
    }
  }
}
