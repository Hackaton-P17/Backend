import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class DeleteUserDto{

    @ApiProperty()
    @IsNotEmpty()
    _id: string;

  @ApiProperty()
  @IsNotEmpty()
  role:number;
  
}