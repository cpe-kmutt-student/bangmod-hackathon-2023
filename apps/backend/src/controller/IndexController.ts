import { Controller, ControllerMapping, Methods, Request, Response, RouteMapping } from 'springpress';

@ControllerMapping('/')
export class IndexController extends Controller {

  @RouteMapping('/', Methods.GET)
  private async index(req: Request, res: Response) {
    res.status(200).json({
      name: 'Bangmod Hackathon 2023',
      timestamp: new Date(),
    });
  }

}
