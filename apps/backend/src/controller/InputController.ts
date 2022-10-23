import { InputService } from '@/service/InputService';
import { RequireAuth } from '@/utils/decorator/AuthDecorator';
import { InputSavePostApiSchema } from 'api-schema';
import { Controller, ControllerMapping, Methods, Request, Response, RouteMapping } from 'springpress';

@ControllerMapping('/input')
export class InputController extends Controller {

  private readonly inputService: InputService;

  public constructor(inputService: InputService) {
    super();
    this.inputService = inputService;
  }

  @RequireAuth()
  @RouteMapping('/get', Methods.GET)
  private async getInput(req: Request, res: Response) {
    const inputData = await this.inputService.getInputByEmail(req.session!.email);
    res.status(200).json({ students: inputData?.students, team: inputData?.team, advisor: inputData?.advisor });
  }

  @RequireAuth()
  @RouteMapping('/save', Methods.POST)
  private async saveInput(req: Request<InputSavePostApiSchema>, res: Response) {
    const registrationFormData = req.body;
    const result = await this.inputService.saveInputByEmail(req.session!.email, registrationFormData);
    if (result) {
      res.status(200).json({ message: 'Success', data: result });
    } else {
      res.status(400).json({ message: 'Error' });
    }
  }

}
