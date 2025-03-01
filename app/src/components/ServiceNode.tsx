import { Handle, Position } from "@xyflow/react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";

const ServiceNode = ({ data, isConnectible }) => {
  return (
    <div className='p-4 rounded-lg shadow-lg bg-white border'>
      <Handle
        type='target'
        position={Position.Left}
        id='target'
        isConnectable={isConnectible}
      />

      <Popover>
        <PopoverTrigger asChild>
          <CardHeader className='cursor-pointer'>
            <CardTitle>{data.type}</CardTitle>
          </CardHeader>
        </PopoverTrigger>

        <PopoverContent className=''>
          <CardHeader>
            <CardTitle>{data.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className=''>
              <div className='flex items-center justify-between'>
                <Label>Type</Label>
                <span className='font-medium'>{data.type}</span>
              </div>
              <div className='flex items-center justify-between'>
                <Label>Region</Label>
                <span className='font-medium'>{data.region}</span>
              </div>
              <div className='flex items-center justify-between'>
                <Label>VPC</Label>
                <span className='font-medium'>{data.vpc}</span>
              </div>
              <div>
                <Label>Options</Label>
                <ul>
                  {Object.entries(data.options).map(([key, value]) => (
                    <li key={key} className='flex items-center justify-between'>
                      <span>{key}</span>
                      <span className='font-medium'>
                        {Array.isArray(value)
                          ? value.join(", ")
                          : typeof value === "boolean"
                          ? value
                            ? "Enabled"
                            : "Disabled"
                          : value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </PopoverContent>
      </Popover>

      <Handle
        type='source'
        position={Position.Right}
        id='source'
        isConnectable={isConnectible}
      />
    </div>
  );
};

export default ServiceNode;
