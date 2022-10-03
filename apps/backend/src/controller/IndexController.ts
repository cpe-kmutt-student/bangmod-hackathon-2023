import { Controller, ControllerMapping, Methods, Request, Response, RouteMapping } from 'springpress';

@ControllerMapping('/')
export class IndexController extends Controller {

  @RouteMapping('/', Methods.POST)
  private async index(req: Request, res: Response) {
    res
      .status(200)
      .json({
        name: 'Bangmod Hackathon 2023',
      });
  }

}
