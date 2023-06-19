export class Article {
  constructor(public props: App.Module.ArticleProps) {}

  public get id(): number {
    return this.props.id
  }

  public get title(): string {
    return this.props.title
  }

  public get description(): string {
    return this.props.description
  }

  public get source(): string {
    return this.props.source
  }

  public get author(): string {
    return this.props.author
  }

  public get content(): string {
    return this.props.content
  }

  public get url(): string {
    return this.props.url
  }

  public get url_image(): string {
    return this.props.url_image
  }

  public get published_at(): string {
    return this.props.published_at
  }

  public get category(): App.Module.CategoryProps {
    return this.props.category
  }

  public toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      source: this.source,
      author: this.author,
      content: this.content,
      url: this.url,
      urlImage: this.url_image,
      publishedAt: this.published_at,
      category: this.category,
    }
  }
}
