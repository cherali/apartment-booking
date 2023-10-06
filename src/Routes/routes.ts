/**
 * all all routed here
 */

interface IRoutes {
  public: {
    home: string
  }
  private: {
    reserve: string
  }
}

export const routes: IRoutes = {
  public: {
    home: '/',
  },
  private: {
    reserve: '/reserve',
  },
}
