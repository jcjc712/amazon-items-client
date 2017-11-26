import { WishlistclientPage } from './app.po';

describe('wishlistclient App', () => {
  let page: WishlistclientPage;

  beforeEach(() => {
    page = new WishlistclientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
